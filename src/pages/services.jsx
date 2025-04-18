import BaseLayout from "@layouts/base";
import ServicesView from "@views/services";

export default function Services() {
    return <ServicesView/>
}

Services.getLayout = function getLayout(page) {
    return <BaseLayout>{page}</BaseLayout>;
};