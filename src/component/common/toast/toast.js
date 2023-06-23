import { toast } from "react-toastify";
import {BsFillCheckCircleFill} from 'react-icons/bs';
import { MdOutlineError } from 'react-icons/md'
import style from './toast.module.css'

export const showToast = (type,message) => {
    if(type === "success") {
        toast.success(message,{
            icon: <BsFillCheckCircleFill className={style['toast-progress-icon-success']}/>,
            progressStyle: {background:'#0079bf'}
          });
        return
    }
    if (type === "error") {
        toast.error(message,{
            icon: <MdOutlineError className={style["toast-progress-icon-error "]}/>,
            progressStyle: {background:'#ff0000'}
          })
          return
    }
}