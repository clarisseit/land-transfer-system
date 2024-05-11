import { useState } from 'react';
import { TiTick } from "react-icons/ti";

const SellerFormPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        idOrPassport: '',
        phoneNumber: '',
        landDocument: null,
        amountReceived: '',
        agreement: null,
        codeFile: '',
    });

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation checks
        if (formData.idOrPassport.length !== 16 || formData.codeFile.length !== 16) {
            setErrorMessage('ID/Passport and Code File must be exactly 16 characters long.');
            return;
        }

        // Submit logic here
        setShowSuccessMessage(true);
        setErrorMessage('');
    };

    const handleDownload = () => {

        window.open('https://www.ilovepdf.com/download/tfp530g48wp9ptyt13jy70g7xy04hyrkjg4lk70rbjk6dbl2Ajm91js9hx42rhk667sf4bz177523dA4nj52A0rj1mmh1phgppw85ddqsy9p67814g1kwc6n0kj3p9yrsfk37b8vytpbcmAz65tv1msrfhhbl2c09h05yjjfq8swpfdys9zq/9o', '_blank');
    };

    return (
        <>
            <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Welcome to the Agreement</h2>
                {errorMessage && (
                    <p className="text-red-500 mb-4">{errorMessage}</p>
                )}
                <p>Download and complete honesty this form:</p>
                <button onClick={handleDownload} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Download Form</button>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block">Full Names</label>
                        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="idOrPassport" className="block">ID/Passport</label>
                        <input type="text" id="idOrPassport" name="idOrPassport" value={formData.idOrPassport} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block">Phone Number</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="landDocument" className="block">Land Document</label>
                        <input type="file" id="landDocument" name="landDocument" onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="amountReceived" className="block">Amount Received (FRW)</label>
                        <input type="text" id="amountReceived" name="amountReceived" value={formData.amountReceived} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="agreement" className="block">Agreement</label>
                        <input type="file" id="agreement" name="agreement" onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="codeFile" className="block">Code File</label>
                        <input type="text" id="codeFile" name="codeFile" value={formData.codeFile} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                </form>
                {showSuccessMessage && (
                    <p className="mt-4 text-green-600">Form received successfully, you will see the message on your phone shortly</p>
                )}
            </div>
            {
                showSuccessMessage && (
                    <p className="-mt-[45rem] text-xl text-mono  ml-[63rem] text-blue-600">Form received successfully, you will see the message on your phone shortly  < TiTick className="bg-gray-200 rounded-full text-4xl mt-[3rem] ml-[2rem] w-[10rem] h-[10rem]" /></p>
                )

            }

        </>
    );
};

export default SellerFormPage;
