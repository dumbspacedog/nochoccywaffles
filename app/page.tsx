import Image from "next/image";

function selectRandomImage() {
  const images = [
    "https://nextcloud.ohheyandie.gay/index.php/apps/files_sharing/publicpreview/dibrXQTzDFeLzop?file=/stickers/8.png&fileId=674&x=1920&y=1080&a=true&etag=8df8cd5e36418b4b90428754c4b186cb",
    "https://nextcloud.ohheyandie.gay/index.php/apps/files_sharing/publicpreview/dibrXQTzDFeLzop?file=/stickers/2.png&fileId=675&x=1920&y=1080&a=true&etag=80125122bf0ba628334c0aa7f3de40ba"
  ]

  return images[Math.floor(Math.random() * images.length)];
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image 
          src={selectRandomImage()}
          height={128} 
          width={128} 
          alt="A sticker, owned by NoChoccyWaffles, showing his character, a orange and white patterned red panda."        
          className="shadow bg-gray-200 dark:bg-white-200 p-[10px] rounded-sm"
        />
        
      </main>
    </div>
  );
}
