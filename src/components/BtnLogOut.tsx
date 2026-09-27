import { clearSessionCookies } from "../util/cookies"
import { IconLogout } from "./icons/Icons"

export default function BtnLogOut(){
 return <a onClick={clearSessionCookies} className="active text-decoration-none custom-a d-flex gap-1 align-items-center w-100 custom-a d-flex gap-1 align-items-center" aria-current="page" href="/login"><IconLogout width="25" height="25" />Salir</a>
};