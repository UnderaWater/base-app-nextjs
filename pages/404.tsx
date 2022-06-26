import Htag from "../components/Htag/Htag";
import { withLayout } from "../layout/Layout";


export function Error404() {
    return (
        <>
            <Htag tag='h1'>
                Page not found 404
            </Htag>
        </>
    );
}

export default withLayout(Error404);