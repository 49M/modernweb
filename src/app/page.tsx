import Image from "next/image"
import {db} from "~/server/db";

const socialNetImgs = [
    "https://x58p5pjq8q.ufs.sh/f/2QIaHtMj8D7ksG7PtjWX6qYdoxB7uRjDlfaGE5WVheCF0Ht3",
    "https://x58p5pjq8q.ufs.sh/f/2QIaHtMj8D7kLI9buGe7af4I9W2rXQmb1UkTneJRs8NPvZDw",
    "https://x58p5pjq8q.ufs.sh/f/2QIaHtMj8D7kD55sYrBbsMk9hFwRnT8PJf0gN1SuaciAep3q"
];

const mockImages = socialNetImgs.map((url, index) => ({
    id: index + 1,
    url
}));

export default async function HomePage() {
    const posts = await db.query.posts.findMany();
    console.log(posts);

    return (
    <main>
      <div className="min-h-screen flex flex-wrap gap-10 justify-center items-center">
          {
              mockImages.map((image) => (
                  <div key={image.id}>
                      <Image src={image.url} alt="image" width={100} height={100} />
                  </div>
              ))
          }
      </div>
    </main>
  );
}
