import { Lock, Mail } from "react-feather";
import { Link } from "react-router-dom";
import { ReactComponent as Background } from "../assets/background.svg";
import { ReactComponent as Logo } from "../assets/codespace-logo.svg";
import { SIGNUP_ROUTE } from "../routes";

const Login = () => {
    return (
        <div className="flex flex-col md:flex-row items-center w-screen h-screen">
            <div className="md:flex-1 flex items-center justify-center">
                <Background className="hidden md:block h-[80vh]" />
                <Logo className="md:hidden my-8" height={48} />
            </div>
            <div className="flex-1 w-full p-4 flex items-center justify-center">
                <form className="w-full block max-w-[24rem] space-y-2">
                    <h3 className="text-center text-lg text-neutral-500 mb-8">LOGIN</h3>
                    <div className="relative">
                        <Mail className="absolute top-4 left-4 stroke-neutral-500" width={18} height={18} />
                        <input className="custom-input" type="email" placeholder="email" />
                    </div>
                    <div className="relative">
                        <Lock className="absolute top-4 left-4 stroke-neutral-500" width={18} height={18} />
                        <input className="custom-input" type="password" placeholder="password" />
                    </div>
                    <div className="row flex">
                        <Link to={SIGNUP_ROUTE} className="btn-secondary flex-1 h-12">Signup</Link>
                        <button className="btn-secondary flex-1 h-12">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
