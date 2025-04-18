import BaseLayout from "@layouts/base";

export default function Home() {
    return <></>;
}

Home.getLayout = function getLayout(page) {
    return <BaseLayout>{page}</BaseLayout>;
};