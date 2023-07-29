const handler = async (req,res) => {
    const cookieName = token;
   
  res.setHeader("Set-Cookie", `${cookieName}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; SameSite=Strict`);

  res.status(200).json({ message: "Oturum başarıyla kapatıldı." });
}

export default handler;