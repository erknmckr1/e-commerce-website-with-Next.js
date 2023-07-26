import dbConnect from "@/lib/dbConnect";
import Admin from "@/models/Admin";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';


const handler = async (req, res) => {
  //! dbConnect ile veri tabanına bağlan... 
  await dbConnect();
  const crypto = require("crypto");

  const { username, password } = req.body;

  //!findOne metodu ıle kullanıcı adına gore verı tabanında arama yaptık ve ilgili kullanıcı belgesını admınUser degıskenıne atadık.
  const adminUser = await Admin.findOne({username});

  //!Kullanıcı adı ve sıfre eslesmezse 401 hata kodu ılgılı hata metnını dondurecek.  compateSync
  if (!adminUser || !bcrypt.compareSync(password, adminUser.password)) {
    return res.status(401).json({ error: "Kullanıcı adı veya şifre hatalı!" });
  }

  //! 32 byte uzunlugunda rastgele bır key olusturup hex(onaltılık) formata cevırıyoruz. 
  // Ve bu keyı sadece bır kere olusturmalıyız yanı sadece oturum bılgılerı dogru ıse olusuturlucak aksı taktırde sureklı token olusturup kullanıcının oturumdan sureklı dusmesı vs. sağlanır. 
  const secretKey = crypto.randomBytes(32).toString("hex");

  //!"jwt.sign" ile oluşturulan anahtar (secretKey) kullanılarak kullanıcının kimliğini taşıyan bir JWT oluşturulur. JWT içeriği, kullanıcının id'si, kullanıcı adı ve rolü gibi bilgileri içerir. Oluşturulan JWT (token) ve "authenticated: true" ifadesi, doğrulanan kullanıcıyı temsil eder ve 200 HTTP durum koduyla birlikte yanıt olarak döndürülür.
  const token = jwt.sign({ id: adminUser.id, username: adminUser.username, role: adminUser.role }, secretKey, { expiresIn: "1h" });
  res.status(200).json({token,authenticated: true})
  
};

export default handler;
