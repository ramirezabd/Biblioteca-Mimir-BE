import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [namaAnggota, setnamaAnggota] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [jurusanAnggota, setJurusanAnggota] = useState('');
    const [kelasAnggota, setKelasAnggota] = useState('');
    const [nomorTelepon, setNomorTelepon] = useState('');
    const [alamat, setAlamat] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/users', {
                namaAnggota: namaAnggota,
                username: username,
                password: password,
                confPassword: confPassword,
                jurusanAnggota: jurusanAnggota,
                kelasAnggota: kelasAnggota,
                nomorTelepon: nomorTelepon,
                alamat: alamat,
            });
            navigate("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Register} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">username</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Confirm Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nama Anggota</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Nama Anggota"
                                            value={namaAnggota} onChange={(e) => setnamaAnggota(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Jurusan</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Jurusan"
                                            value={jurusanAnggota} onChange={(e) => setJurusanAnggota(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Kelas</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Kelas"
                                            value={kelasAnggota} onChange={(e) => setKelasAnggota(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Nomor Telepon</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Nomor HP"
                                            value={nomorTelepon} onChange={(e) => setNomorTelepon(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Alamat</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Alamat"
                                            value={alamat} onChange={(e) => setAlamat(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register