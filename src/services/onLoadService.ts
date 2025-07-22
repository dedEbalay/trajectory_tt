import { Post } from "../interfaces"

export default async function onLoadService(): Promise<Post> {
    const res = await fetch('https://ofc-test-01.tspb.su/test-task/vehicles')
        
    return res.json()
}