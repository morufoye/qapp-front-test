
import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styles from "../../styles/auth.module.css";
import AuthLoginForm from "../../components/forms/AuthLoginForm";
export default function Home() {
    const navigate = useNavigate();
    return (
        <div className={styles.authFormWrapper}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='offset-lg-4 col-lg-4'>
                        <div className={styles["authForm"]}>
                            <div className={styles["authTop"]}>
                                <h2>Ona account for every bank</h2>

                                <h1>
                                    Own your limits with custom design that
                                    lets you manage all your bank account
                                    in one space.
                                </h1>

                                <div>
                                    <button className={styles["loginbutton"]}  onClick={()=>{navigate('auth/login')}}>
                                        Login to QAPP
                                    </button>
                                </div>
                                <div>
                                    <button className={styles["loginbank"]} to='/'>
                                        Login to Bank Account
                                    </button>
                                </div>

                                <span style={{color: "#ffffff"}}>Are you a Bank? </span>  <Link  style={{color: "#FC7620"}} to='/'>Request a Demo </Link>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
