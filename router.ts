import { Router } from "https://deno.land/x/oak/mod.ts"
import { getUsers } from "./controller/user.ts"

const router = new Router();

router.get("/", (context) => {
    context.response.body = "hello world"
})

router.get("users", getUsers)

export default router;