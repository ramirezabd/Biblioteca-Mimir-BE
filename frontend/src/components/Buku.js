// import React, { useState } from 'react';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Book = () => {

    const [isbn, setISBN] = useState('');
    const [judulBuku, setJudulBuku] = useState('');
    const [penulis, setPenulis] = useState('');
    const [penerbit, setPenerbit] = useState('');
    const [tahunPenerbit, setTahunPenerbit] = useState('');
    const [sinopsis, setSinopsis] = useState('');
    const [stock, setStock] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Booked = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://localhost:8000/ibuku", {
                isbn: isbn,
                judulBuku: judulBuku,
                penulis: penulis,
                penerbit: penerbit,
                tahunPenerbit: tahunPenerbit,
                sinopsis: sinopsis,
                stock: stock,
            });
            navigate("/");

        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg)
            }
        }
    }

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Booked} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">ISBN</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Kode ISBN"
                                            value={isbn} onChange={(e) => setISBN(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Judul Buku</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder='Masukan Judul Buku'
                                            value={judulBuku} onChange={(e) => setJudulBuku(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Penulis</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder='Masukan Penulis'
                                            value={penulis} onChange={(e) => setPenulis(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Penerbit</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Penerbit"
                                            value={penerbit} onChange={(e) => setPenerbit(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Tahun Penerbitan</label>
                                    <div className="controls">
                                        <input type="date" className="input" placeholder="Tahun Penerbitan"
                                            value={tahunPenerbit} onChange={(e) => setTahunPenerbit(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Sinopsis</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Ringkasan Sinopsis"
                                            value={sinopsis} onChange={(e) => setSinopsis(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Stock</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Stock Buku"
                                            value={stock} onChange={(e) => setStock(e.target.value)} />
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

export default Book