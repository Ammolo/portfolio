
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"

/** Page for development demos */
export default async function Page() {     

    return (
        <div className="flex items-center">
            <div className="grid gap-4">
                <h1 className=" font-bold text-3xl">Section Coming Soon</h1>
                <Input></Input>
                <Button>Enter</Button>
            </div>
        </div>
    )
  }