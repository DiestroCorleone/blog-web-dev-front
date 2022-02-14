import { Head } from "components/common/Head";

import Header from "components/home/Header";
import CategoryNav from "components/home/CategoryNav";
import LastPosts from "components/home/LastPosts";

import { posts } from "mocks/home";

function HomePage() {
  return (
    <>
      <Head title="Home Page" description="This is a page description" />

      <Header />
      <main>
        <CategoryNav />
        <LastPosts posts={posts} />
      </main>
    </>
  );
}

export default HomePage;
