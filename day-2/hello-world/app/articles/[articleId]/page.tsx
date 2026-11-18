import Link from "next/link";
import {use} from "react"

export default async function NewsArticle({params , searchParams}:{
    params : Promise<{ariticleId : string} >;
    searchParams: Promise<{lang?: "en" | "es" | "fr"}>
}){

    const {ariticleId} = use(params);
    const {lang="en"} = use(searchParams);
    return(
        <div>
            <h1>News article id</h1>
            <p>Reading in language</p>

            <div>
                <Link href={`/article/${ariticleId}?lang=en`}>English</Link>
                <Link href="/article/id?lang=es">Spanish</Link>
                <Link href="/article/id?lang=fr">French</Link>
            </div>
        </div>
    )
}