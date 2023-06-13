import React, { useState, useEffect } from 'react';
import Configuration from '../../../components/admin/configuration/Configuration';
import { FetchConfiguration } from '../../../utils/userController';

const Client = () => {
  const [configurationClientData, setConfigurationClientData] = useState([]);

  const fetchConfigurationClientData = async () => {
    try {
      const response = await FetchConfiguration(2);
      setConfigurationClientData(response);
    } catch (error) {
      console.log('Error fetching configuration data:', error);
    }
  };

  useEffect(() => {
    fetchConfigurationClientData();
  }, []);

  return (
    <>
      <Configuration />
      <section className="container mx-auto w-full bg-gray-800">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
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
              {configurationClientData.map((configurationClient) => (
                <tr className="bg-white dark:bg-gray-800" key={configurationClient.id}>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        defaultChecked={configurationClient.status === 1}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                    </label>
                  </th>
                  <td className="px-6 py-4 w-2/5">
                    {configurationClient.name}
                  </td>
                  <td className="px-6 py-4 w-2/5">
                    <input className="pl-2 w-full border border-current" defaultValue={configurationClient.value} />
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

export default Client;
