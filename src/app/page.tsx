import { permanentRedirect } from "next/navigation";
import Routes from "component/Routes";

export default function Page() {
    permanentRedirect("/auth/login");
}
