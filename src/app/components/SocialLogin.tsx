import { Github } from "../assets/svgs/Github";
import { Google } from "../assets/svgs/Google";
import SocialButton from "./SocialButton";

export default function SocialLogin() {
  return (
    <div className="mt-10">
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-primary px-6 text-white">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <SocialButton
                name="Google"
                SVGIcon={Google}
                href="#google-login"
              />
              {/* <SocialButton
                name="Github"
                SVGIcon={Github}
                href="#github-login"
              /> */}
            </div>
          </div>
  )
}
