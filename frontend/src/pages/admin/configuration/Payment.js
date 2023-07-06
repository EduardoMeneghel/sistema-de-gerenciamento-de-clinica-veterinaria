import React, { useState, useEffect } from 'react';
import Configuration from '../../../components/admin/configuration/Configuration';
import { FetchConfiguration } from '../../../utils/userController';
const Payment = () => {
    const [configurationPaymentData, setConfigurationPaymentData] = useState([]);

    const fetchConfigurationPaymentData = async () => {
      try {
        const response = await FetchConfiguration(4);
        setConfigurationPaymentData(response);
      } catch (error) {
        console.log('Error fetching configuration data:', error);
      }
    };
  
    useEffect(() => {
      fetchConfigurationPaymentData();
    }, []);
  
    return (
        <>
            <Configuration />
            <section className="container mx-auto w-full bg-gray-800">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nome da Config
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Valor
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {configurationPaymentData.map((configurationPayment) => (
                                <tr className="bg-white" key={configurationPayment.id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer"
                                        defaultChecked={configurationPayment.status === 1}
                                        />
                                    </label>
                                    </th>
                                    <td className="px-6 py-4 w-2/5">
                                    {configurationPayment.name}
                                    </td>
                                    <td className="px-6 py-4 w-2/5">
                                    <input className="pl-2 w-full border border-current" defaultValue={configurationPayment.value} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default Payment;
