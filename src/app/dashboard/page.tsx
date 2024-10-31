
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons/faSliders';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';

interface Model {
  name: string;
  age: number;
  username: string;
  imageUrl: string;
}

const models: Model[] = [
  { name: "Anisha", age: 26, username: "anisha_phillip", imageUrl: "ModelsImage/1.jpeg" },
  { name: "Crystal", age: 23, username: "crystal_the", imageUrl: "ModelsImage/7.jpg" },
  { name: "Meiying", age: 24, username: "meiying.chinamodel", imageUrl: "ModelsImage/3.jpeg" },
  { name: "Caroline", age: 27, username: "caroline", imageUrl: "/ModelsImage/4.jpeg" },
  { name: "Caroline", age: 27, username: "caroline", imageUrl: "/ModelsImage/5.jpeg" }
];

const ModelsPage: React.FC = () => {
  return (
    
  <div className="w-full h-full px-16 p-8">
    {/* Barra de Ferramentas */}
     <div className="flex flex-col">
      {/* Abas de navegação */}
      <div className="flex space-x-6 mb-4">
      <button className="text-blue-500 font-semibold">Models</button>
      <button className="text-gray-400 hover:text-blue-500">Layout</button>
     </div>

  <div className="flex items-center space-x-4 ">
  {/* Campo de busca */}
  <input
    type="text"
    placeholder="Search"
    className="bg-gray-800 text-white placeholder-gray-500 px-4 py-2 rounded-lg focus:outline-none w-full"
  />

  {/* Botão de filtros */}
  <button className="flex items-center bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-lg">
    <FontAwesomeIcon icon={faSliders} className="w-4 h-4 pr-1" />
    Filters
  </button>
  
  <div className="flex items-center justify-between w-full">
  {/* Botão de edição e de adicionar novo dentro de um contêiner flexível */}
  <div className="flex items-center space-x-4 ml-auto">
    {/* Botão de edição */}
    <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg">
      <FontAwesomeIcon icon={faPen} className="w-4 h-4 pr-1" />
      Edit
    </button>

    {/* Botão de adicionar novo */}
    <button className="flex items-center bg-green-600 hover:bg-green-500 text-white px-3 py-2 rounded-lg">
      <FontAwesomeIcon icon={faPlus} className="w-4 h-4 pr-1" />
      Add new
    </button>
  </div>
  </div>
  </div>

  </div>

      {/* Grid de Modelos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {models.map((model, index) => (
          <div key={index} className="bg-gray-800 rounded-lg text-white">
            <img src={model.imageUrl} alt={`${model.name}'s profile`} className="w-full h-52 object-cover rounded-md mb-4" />
            <div className='mb-4 mx-3'>
              <h2 className="text-lg font-semibold">{model.name}, {model.age}</h2>
              <p className="text-sm text-gray-400">@{model.username}</p>
            </div>
              <div className='flex'>
              <button className="mt-3 mb-3 bg-gray-700 hover:bg-gray-600 text-white py-1 px-4 rounded ml-auto mx-3">Details</button>
              </div>
            
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default ModelsPage;