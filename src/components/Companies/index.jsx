import { useEffect, useState } from 'react';

const Companies = () => {
    const [companies, setCompanies] = useState([]);

    //function to fetch the companies from localhost:4001/api/companies
    async function getCompanies() {
        return await fetch('http://192.168.17.120:4001/api/companies')
            .then(response => response.json())
            .then(data => setCompanies(data));
    }


    useEffect(() => {
        getCompanies();
    }, []);

    //function to render the companies in a table
    let content = <div>
        <table>
            <thead>
                <tr>
                    <th>Company Id</th>
                    <th>Company Name</th>
                    <th>Company Identification</th>
                </tr>
            </thead>
            <tbody>
                {companies.map(company => (
                    <tr key={company.companyId}>
                        <td>{company.companyId}</td>
                        <td>{company.name}</td>
                        <td>{company.identification}</td>
                    </tr>))}
            </tbody>
        </table>
    </div>;


    return (
        <div>
            {content}
        </div>
    );
}


export default Companies;