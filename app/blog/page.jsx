import { getPostMetadata } from "@/libs/getPostMetadata"
import BlogPostCard from "@/components/blogpost"
import HeroSection from "@/components/hero-section"
import Link from "next/link";

function BlogPage() {
    const postMetadataReversed = getPostMetadata();
    const postMetadata = postMetadataReversed.slice().reverse();
    const postPreviews = postMetadata.map((post) => (
        <div>
            <Link href={`/blog/${post.slug}`}>
                <BlogPostCard 
                    title={post.title}
                    content={post.preview}
                    date={post.date}
                    photo={post.image}
                    key={post.slug}
                />
            </Link>
        </div>
    ))

    return (
        <div className="justify-center">
            <div className="items-center">
                <HeroSection
                    title={"Server Updates"}
                />
            </div>
            <div className="flex flex-col gap-5 justify-center items-center max-w-auto">
                {postPreviews}
            </div>
        </div>
    )
}

export default BlogPage;