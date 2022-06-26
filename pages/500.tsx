import Htag from "../components/Htag/Htag";
import { withLayout } from "../layout/Layout";


function Error500() {
    return (
        <>
            <Htag tag='h1'>
                Error 500
            </Htag>
        </>
    );
}

export default withLayout(Error500);