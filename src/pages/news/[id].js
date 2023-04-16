import PageHeader from "@/components/PageHeader";
import CommentList from "@/components/CommentList";
import CommentForm from "@/components/CommentForm";
import AuthorBio from "@/components/AuthorBio";
import SearchForm from "@/components/SearchForm";
import CategoryList from "@/components/CategoryList";
import RecentPost from "@/components/RecentPost";
import TagCloud from "@/components/TagCloud";

const New = () => {
  return (
    <>
      <PageHeader title="" />
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="mb-5">
                <h6 className="text-primary mb-3">Jan 01, 2050</h6>
                <h1 className="mb-5">
                  Vero ipsum sea justo dolore eirmod amet dolor tempor lorem
                </h1>
                <img
                  className="img-fluid rounded w-100 mb-4"
                  src="/img/carousel-1.jpg"
                  alt="Image"
                />
                <p>
                  Sadipscing labore amet rebum est et justo gubergren. Et eirmod
                  ipsum sit diam ut magna lorem. Nonumy vero labore lorem
                  sanctus rebum et lorem magna kasd, stet amet magna accusam
                  consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                  sanctus et. Ipsum sit gubergren dolores et, consetetur justo
                  invidunt at et aliquyam ut et vero clita. Diam sea sea no sed
                  dolores diam nonumy, gubergren sit stet no diam kasd vero.
                </p>
                <p>
                  Voluptua est takimata stet invidunt sed rebum nonumy stet,
                  clita aliquyam dolores vero stet consetetur elitr takimata
                  rebum sanctus. Sit sed accusam stet sit nonumy kasd diam
                  dolores, sanctus lorem kasd duo dolor dolor vero sit et.
                  Labore ipsum duo sanctus amet eos et. Consetetur no sed et
                  aliquyam ipsum justo et, clita lorem sit vero amet amet est
                  dolor elitr, stet et no diam sit. Dolor erat justo dolore sit
                  invidunt.
                </p>
                <h2 className="mb-4">Est dolor lorem et ea</h2>
                <img
                  className="img-fluid rounded w-50 float-left mr-4 mb-3"
                  src="/img/blog-1.jpg"
                  alt="Image"
                />
                <p>
                  Diam dolor est labore duo invidunt ipsum clita et, sed et
                  lorem voluptua tempor invidunt at est sanctus sanctus. Clita
                  dolores sit kasd diam takimata justo diam lorem sed. Magna
                  amet sed rebum eos. Clita no magna no dolor erat diam tempor
                  rebum consetetur, sanctus labore sed nonumy diam lorem amet
                  eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr
                  sadipscing gubergren erat. Gubergren at lorem invidunt
                  sadipscing rebum sit amet ut ut, voluptua diam dolores at
                  sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos.
                  Invidunt sed diam dolores takimata dolor dolore dolore sit.
                  Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam
                  eirmod kasd lorem clita sanctus ut consetetur et. Et duo
                  tempor sea kasd clita ipsum et. Takimata kasd diam justo est
                  eos erat aliquyam et ut. Ea sed sadipscing no justo et eos
                  labore, gubergren ipsum magna dolor lorem dolore, elitr
                  aliquyam takimata sea kasd dolores diam, amet et est accusam
                  labore eirmod vero et voluptua. Amet labore clita duo et no.
                  Rebum voluptua magna eos magna, justo gubergren labore sit.
                </p>
                <p>
                  Diam dolor est labore duo invidunt ipsum clita et, sed et
                  lorem voluptua tempor invidunt at est sanctus sanctus. Clita
                  dolores sit kasd diam takimata justo diam lorem sed. Magna
                  amet sed rebum eos. Clita no magna no dolor erat diam tempor
                  rebum consetetur, sanctus labore sed nonumy diam lorem amet
                  eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr
                  sadipscing gubergren erat.
                </p>
              </div>
              <CommentList />
              <CommentForm />
            </div>
            <div class="col-lg-4 mt-5 mt-lg-0">
              <AuthorBio />
              <SearchForm />
              <CategoryList />
              <RecentPost />
              <TagCloud />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
