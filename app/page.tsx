import Image from "next/image";
import { Mail } from "@geist-ui/icons";

// this is a bad way to do this.
export const dynamic = 'force-dynamic';


function selectRandomImage() {
  const images = [
    "https://nextcloud.ohheyandie.gay/index.php/apps/files_sharing/publicpreview/dibrXQTzDFeLzop?file=/stickers/8.png&fileId=674&x=1920&y=1080&a=true&etag=8df8cd5e36418b4b90428754c4b186cb",
    "https://nextcloud.ohheyandie.gay/index.php/apps/files_sharing/publicpreview/dibrXQTzDFeLzop?file=/stickers/2.png&fileId=675&x=1920&y=1080&a=true&etag=80125122bf0ba628334c0aa7f3de40ba"
  ]

  return images[Math.floor(Math.random() * images.length)];
}

const DarkMode = {
  Discord: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/653714c1f22aef3b6921d63d_636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg",
  Twitch: ""
}

const LightMode = {
  Discord: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/653714c17467993e7b389c83_636e0a6918e57475a843f59f_icon_clyde_black_RGB.svg",
  Twitch: ""
}
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <div className="flex justify-center min-w-[100%]">
          <Image 
            src={selectRandomImage()}
            height={128} 
            width={128} 
            alt="A sticker, owned by NoChoccyWaffles, showing his character, a orange and white patterned red panda."        
            className="shadow bg-gray-200 dark:bg-white-200 p-[10px] rounded-sm mb-[20px]"
          />
        </div>

        
        <div>
          <a href="https://discord.gg/U2G5epcp4Y">
            <div style={{float: "left"}} className="mr-[30px] mb-[10px]">
              <picture>
                <source srcSet={LightMode.Discord} media="(prefers-color-scheme: light)" />
                <Image
                  src={DarkMode.Discord}
                  height={32}
                  width={32}
                  alt="Logo of Discord, owned by Discord Inc."
                />
              </picture>
            </div>
            <span className="align-middle">.gg/U2G5epcp4Y</span>
          </a>
        </div>

        <div>
          <a href="#">
            <div style={{float: "left"}} className="mr-[30px] mb-[10px]">
              <picture>
                <source srcSet={LightMode.Discord} media="(prefers-color-scheme: light)" />
                <Image
                  src={DarkMode.Discord}
                  height={32}
                  width={32}
                  alt="Logo of Discord, owned by Discord Inc."
                />
              </picture>
            </div>
            <span className="align-middle">@nochoccywaffles</span>
          </a>
        </div>

        <div>
          <a href="mailto:hello@nochoccywaffles.com">
            <div style={{float: "left"}} className="mr-[30px]">
              <Mail size={32} />
            </div>
            <span className="align-middle">hello@nochoccywaffles.com</span>
          </a>
        </div>
      </main>
    </div>
  );
}
