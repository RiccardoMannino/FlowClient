import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/card";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { Text } from "@/components/ui/Text";

export default function Home() {
  return (
    <>
      <main className="grid min-h-screen w-full grid-cols-1 place-items-center grid-flow-row ">
       <h1 className="font-semibold text-[clamp(2rem,4vw+1rem,6rem)] self-end">FlowClient</h1>
        <div className="flex flex-col items-center gap-6 text-center self-start">
          <h2 className="text-[clamp(1.5rem,4vw+1rem,2.5rem)] tracking-tight text-black dark:text-zinc-50">
            Mini CRM per freelance.
          </h2>
        </div>
        <div className="flex gap-4 w-full text-base font-medium self-start justify-center">
          <Button>
         <Link
            className="flex h-12 items-center justify-center gap-2 px-5 transition-colors md:w-39.5"
            href=""
            target="_blank"
            rel="noopener noreferrer"
            >
        
          Inizia Gratis
          </Link>
          </Button>
          <Button variant={"secondary"}>
             <Link
            className="md:w-39.5"
            href="/login"
            target="_blank"
            rel="noopener noreferrer"
            >
           Login
          </Link>
          </Button>
       
        </div>
        <div className="flex max-sm:flex-col self-start gap-6 max-sm:mt-0  mt-20">
        <Card className="p-4">
          <Card.Content className="text-center">🧑‍💼 Gestisci contatti e lead
           </Card.Content>
           <Card.Description className="text-center">
             <Text>
              In un click, senza Excel sparsi
              </Text>
           </Card.Description>
        </Card>
        <Card className="p-4">
          <Card.Content className="text-center">
            📊 Pipeline deal visuale
          </Card.Content>
          <Card.Description className="text-center"> Trascina le opportunità tra le fasi</Card.Description>
        </Card>
         <Card className="p-4">
          <Card.Content className="text-center">
            ⏰ Mai più follow-up dimenticati
          </Card.Content>
          <Card.Description className="text-center"> Attività e reminder automatici</Card.Description>
        </Card>
        </div>
             
      </main>
      <div className="">
          <Footer/>
      </div>
            </>

  );
}
