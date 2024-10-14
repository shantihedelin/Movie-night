export default function Footer() {
  return (
    <div className="bg-black text-white pt-1 pb-8">
      <h1 className="text-6xl">FILMKVÄLL</h1>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row justify-around">
        <div className="flex flex-col py-4 space-y-2">
          <h3 className="text-pink-400">OM FILMKVÄLL</h3>
          <a
            href=""
            className="no-underline text-white hover:underline"
          >
            OM OSS
          </a>
          <a href="" className="no-underline text-white hover:underline">KONTAKTA OSS</a>
          <a href="" className="no-underline text-white hover:underline">LEDIGA TJÄNSTER</a>
          <a href="" className="no-underline text-white hover:underline">BLI FRANCHISETAGARE</a>
        </div>
        <div className="flex flex-col py-4 space-y-2">
          <h3 className="text-blue-400">BUTIKER</h3>
          <a href="" className="no-underline text-white hover:underline">HITTA BUTIK</a>
        </div>
        <div className="flex flex-col py-4 space-y-2">
          <h3 className="text-orange-400">KUNDKLUBBEN</h3>
          <a href="" className="no-underline text-white hover:underline">FILMKVÄLLS KUNDKLUBB</a>
          <a href="" className="no-underline text-white hover:underline">LADDA NER FÖR IPHONE</a>
          <a href="" className="no-underline text-white hover:underline">LADDA NER FÖR ANDROID</a>
        </div>
        <div className="flex flex-col py-4 space-y-2">
          <h3 className="text-purple-400">FÖLJ OSS</h3>
          <a href="" className="no-underline text-white hover:underline"> INSTAGRAM</a>
          <a href="" className="no-underline text-white hover:underline">TIKTOK</a>
          <a href="" className="no-underline text-white hover:underline">FACEBOOK</a>
          <a href="" className="no-underline text-white hover:underline">LINKEDIN</a>
          <a href="" className="no-underline text-white hover:underline">MYNEWSDESK</a>
        </div>
       
      </div> <div className="flex flex-row p-4 justify-center space-x-8 mt-8">
          <a href="" className="no-underline text-white hover:underline">Frågor? Kontakta oss!</a>
          <a href="" className="no-underline text-white hover:underline">Hantera cookies</a>
          <a href="" className="no-underline text-white hover:underline">Integritetspolicy</a>
          <a href="" className="no-underline text-white hover:underline">Tävlingspolicy</a>
        </div>
      <span>©2024 Filmkväll</span>
    </div>
  );
}
