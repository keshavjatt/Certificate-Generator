import { useState, useRef, useEffect } from "react";
import { Typography, Box, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddCandidate = () => {
    const [image, setImage] = useState(null);
    const hiddenFileInput = useRef(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: 'Keshav Bajwa',
        roll_no: 'hp/kan/kan/102/336',
        fathers_name: 'Late VK Bajwa',
        to: '15-08-2023',
        ref_no: 'hp/kan/kan/102',
        from: '16-08-2024',
        centre_head: 'Dr. Saurabh Singhal Sir',
        date_of_issue: '17-09-2024',
        grade: 'A+',
        image: 'https://avatars.githubusercontent.com/u/120629247?v=4',
        company_name: 'Indira Gandhi Computer Saksharta Mission',
        logo: 'https://www.igcsm.com/assets/img/logo.webp',
        courses: 'Certificate Courses, Diploma Courses, Advanced Diploma Courses, Vocational Courses, Job Oriented Courses, Technical, Higher Education',
        address: '424, 4th Floor, DLF Prime Tower, Okhla Industrial Area, Phase 1, New Delhi 110020',
        phone: '+91-8287698319',
        email: 'thecoder780@gmail.com',
        website: 'https://www.igcsm.com/',
        pan: 'GUNPB****',
        uan: 'ABCD****',
        gst: 'HKLOEN***',
        description: 'The Indira Gandhi Computer Saksharta Mission (IGCSM), founded in 2008, aims to Educate, Enable, and Empower. Operating across 21 states, IGCSM has impacted more than 3 Lakh lives by focusing on educating children, enhancing youth skills, and empowering girls and young women.',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };




    const handleSubmit =  (e) => {
    // console.log(formData,'sadsad')
        e.preventDefault();
        navigate("/print",{state:{formD:formData}});
    };


    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const imgname = event.target.files[0].name;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const maxSize = Math.max(img.width, img.height);
                canvas.width = maxSize;
                canvas.height = maxSize;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(
                    img,
                    (maxSize - img.width) / 2,
                    (maxSize - img.height) / 2
                );
                canvas.toBlob(
                    (blob) => {
                        const file = new File([blob], imgname, {
                            type: "image/png",
                            lastModified: Date.now(),
                        });
                        setImage(file);
                        setFormData((prevData) => ({
                            ...prevData,
                            image: file,
                        }));
                    },
                    "image/jpeg",
                    0.8
                );
            };
        };
    };

    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };

    return (
        <>
            <div className="bgcolor">
                <Box sx={{ display: "flex" }}>
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Card
                            sx={{
                                width: "98%",
                                overflow: "hidden",
                                padding: "12px",
                            }}
                        >
                            <Box height={10} />
                            <Typography variant="h5" align="center">
                                Add Details to Create Certificate
                            </Typography>
                            <div className="w-full max-w-md mx-auto my-10">
                                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                    {/* Form fields */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="visitor_name">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData?.name}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    {/* Add more fields */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company_name">
                                            Roll No
                                        </label>
                                        <input
                                            type="text"
                                            name="roll_no"
                                            value={formData?.roll_no}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    {/* Add more fields */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company_name">
                                            Father's Name
                                        </label>
                                        <input
                                            type="text"
                                            name="fathers_name"
                                            value={formData?.fathers_name}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    {/* Add more fields */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company_name">
                                            From
                                        </label>
                                        <input
                                            type="text"
                                            name="from"
                                            value={formData?.from}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    {/* Add more fields */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company_name">
                                            To
                                        </label>
                                        <input
                                            type="text"
                                            name="to"
                                            value={formData?.to}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    {/* Add more fields */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
                                            Ref No
                                        </label>
                                        <input
                                            type="text"
                                            name="ref_no"
                                            value={formData?.ref_no}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>

                                    {/* Add more fields */}
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsapp_no">
                                            Centre Head
                                        </label>
                                        <input
                                            type="text"
                                            name="centre_head"
                                            value={formData?.centre_head}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsapp_no">
                                            Date of Issue
                                        </label>
                                        <input
                                            type="text"
                                            name="date_of_issue"
                                            value={formData?.date_of_issue}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsapp_no">
                                            Grade
                                        </label>
                                        <input
                                            type="text"
                                            name="grade"
                                            value={formData?.grade}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsapp_no">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            name="company_name"
                                            value={formData?.company_name}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsapp_no">
                                            Logo URL
                                        </label>
                                        <input
                                            type="text"
                                            name="logo"
                                            value={formData?.logo}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsapp_no">
                                            Image URL
                                        </label>
                                        <input
                                            type="text"
                                            name="image"
                                            value={formData?.image}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsapp_no">
                                            Courses
                                        </label>
                                        <textarea
                                            type="text"
                                            name="courses"
                                            value={formData?.courses}
                                            onChange={handleChange}
                                            rows={4}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        ></textarea>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsapp_no">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData?.address}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsapp_no">
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData?.phone}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsapp_no">
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            name="email"
                                            value={formData?.email}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsapp_no">
                                            Website
                                        </label>
                                        <input
                                            type="text"
                                            name="website"
                                            value={formData?.website}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsapp_no">
                                            PAN
                                        </label>
                                        <input
                                            type="text"
                                            name="pan"
                                            value={formData?.pan}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsapp_no">
                                            UAN
                                        </label>
                                        <input
                                            type="text"
                                            name="uan"
                                            value={formData?.uan}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsapp_no">
                                            GST
                                        </label>
                                        <input
                                            type="text"
                                            name="gst"
                                            value={formData?.gst}
                                            onChange={handleChange}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="whatsapp_no">
                                                Description
                                        </label>
                                        <textarea
                                            name="description"
                                            value={formData?.description}
                                            onChange={handleChange}
                                            rows={7}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        ></textarea>
                                    </div>
                                    {/* <div className="image-upload-container mb-10" style={{ maxWidth: "50%" }}>
                                        <div className="box-decoration">
                                            <label htmlFor="image-upload-input" className="image-upload-label">
                                                {image ? image.name : "Choose an image"}
                                            </label>
                                            <div onClick={handleClick} style={{ cursor: "pointer" }}>
                                                {image ? (
                                                    <img src={URL.createObjectURL(image)} alt="upload image" className="img-display-after" />
                                                ) : (
                                                    <img src="./photo.png" alt="upload image" className="img-display-before" />
                                                )}

                                                <input
                                                    id="image-upload-input"
                                                    type="file"
                                                    name="image"
                                                    onChange={handleImageChange}
                                                    ref={hiddenFileInput}
                                                    style={{ display: "none" }}
                                                />
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* Add other fields similarly */}

                                    {/* Submit button */}
                                    <div className="flex items-center justify-center">
                                        <button
                                            type="submit"
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Card>
                    </Box>
                </Box>
            </div>

        </>
    );
};

export default AddCandidate;
