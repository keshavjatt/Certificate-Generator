import React, { useState, useEffect } from 'react';
import './certificate.css';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import QRCode from 'qrcode.react';

function Certificate() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const formData = location.state?.formD || {};
    const [qdata, setQdata] = useState("");

    useEffect(() => {
        setQRData();
    }, [formData]);

    function setQRData() {
        const { name, roll_no, fathers_name, to, ref_no, from, centre_head, date_of_issue, grade, company_name, email, website } = formData;
        const url = `
            Name: ${name}
            Roll No: ${roll_no}
            Ref No: ${ref_no}
            Father Name: ${fathers_name}
            From: ${from}
            To: ${to}
            Date of Issue: ${date_of_issue}
            Grade: ${grade}
            Company: ${company_name}
            Email: ${email}
            Website: ${website}
            Chairman: ${centre_head}
        `;
        console.log("QR Data:", url); // Add this line
        setQdata(url);
    }

    const pseudoElementStyles = {
        content: '""',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        backgroundImage: `url(${formData.logo})`,
        backgroundSize: '100%',
        zIndex: -1,
        opacity: 0.08,
    };

    return (
        <div className="flex justify-center">
            <div className="certificate-container">
                <div className="certificate">
                    <div style={pseudoElementStyles}></div>
                    <div className="certificate-body">
                        <div>
                            <div className="headtxt">{formData.company_name}</div>
                            <div className="flex justify-center -mt-6">
                                <img src={formData.logo} className="logo" alt="" height="60" width="60" />
                            </div>
                            <div className="water-mark-overlay"></div>

                            <p className="certificate-title text-blue-700 font-bold">
                                <strong>{formData.courses}</strong>
                            </p>
                            <p className="certificate-title">
                                {formData.address}
                                <br />
                                Ph: {formData.phone}
                                <br />
                                E-mail: {formData.email}, Website: {formData.website}
                            </p>
                        </div>
                        <div className="flex">
                            <div className="leftside">
                                <hr className="hrStyle" />
                                <p className="student-name">
                                    PAN NO: {formData.pan} &nbsp; UAN: {formData.uan} &nbsp; GSTIN: {formData.gst}
                                </p>
                                <hr className="hrStyle mb-5" />
                                <div className="flex justify-between">
                                    <div>Ref. No.: {formData.ref_no && <strong>{formData.ref_no}</strong>}</div>
                                    <div className="mr-5">Date: {formData.date_of_issue && <strong>{formData.date_of_issue}</strong>}</div>
                                </div>
                            </div>

                            <div className="rightside">
                                <div className="flex justify-center -mt-6">
                                    <img src={formData.image} height="150" width="130" style={{ borderRadius: "15px" }} loading="lazy" />
                                </div>
                            </div>
                        </div>
                        <h4 className="mt-1 mb-2">Certificate of Achievement Awarded to</h4>
                        <p className="text-lg text-left text-blue-600 italic mb-2">
                            Ms/ Mr. {formData.name && <strong className="ml-7">{formData.name}</strong>}
                        </p>
                        <p className="text-lg text-left text-blue-600 italic mb-2">
                            S/o D/o W/o {formData.fathers_name && <strong className="ml-7">{formData.fathers_name}</strong>}
                        </p>
                        <p className="text-lg text-left text-blue-600 italic flex justify-between mb-2">
                            <span>Roll No: {formData.roll_no && <strong className="ml-7">{formData.roll_no}</strong>}</span>
                            <span>has successfully completed the</span>
                        </p>
                        <p className="text-lg text-left text-blue-600 italic flex justify-between mb-2">
                            <span>Internship Training in IGCSM, with Grade {formData.grade && <strong className="ml-7">{formData.grade}</strong>}</span>
                            <span>Held From {formData.from && <strong className="ml-7">{formData.from}</strong>}</span>
                        </p>
                        <p className="text-lg text-left text-blue-600 italic">
                            to {formData.to && <strong className="ml-7">{formData.to}</strong>}
                        </p>
                        <p className="text-lg text-left mt-4 italic text-blue-800 font-semibold">Description:</p>
                        <p className="text-justify ml-2 mt-2 text-sm">{formData.description}</p>
                        <p className="text-justify ml-2 mt-2 text-sm">
                            <span>For, </span>
                            <span className="font-bold text-lg">{formData.company_name}</span>
                        </p>
                    </div>
                    <div className="three-columns-grid">
                        <div><p>Authorized Signatory</p></div>
                        <div><p>Seal</p></div>
                        <div><QRCode value={qdata} className="qrcode" /></div>
                        <div><p>Course Co-ordinator</p></div>
                    </div>
                    <div className="mt-3 flex justify-center p-1">
                        <div className="bg-red-300 text-center p-2 rounded-lg mx-2">
                            <div className="font-bold text-lg">GRADE A+</div>
                            <div className="font-semibold text-lg">85% & ABOVE</div>
                        </div>
                        <div className="bg-blue-300 text-center p-2 rounded-lg mx-2">
                            <div className="font-bold text-lg">GRADE A</div>
                            <div className="font-semibold text-lg">75% & ABOVE</div>
                        </div>
                        <div className="bg-yellow-300 text-center p-2 rounded-lg mx-2">
                            <div className="font-bold text-lg">GRADE B</div>
                            <div className="font-semibold text-lg">60% & ABOVE</div>
                        </div>
                        <div className="bg-green-300 text-center p-2 rounded-lg mx-2">
                            <div className="font-bold text-lg">GRADE C</div>
                            <div className="font-semibold text-lg">45% to 59%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certificate;
