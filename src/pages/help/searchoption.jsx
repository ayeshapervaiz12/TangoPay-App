import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const questions = [
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
  "what was my transfer cancelled",
];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredQuestions = questions.filter((question) =>
    question.includes(searchTerm)
  );

  // Limit the number of questions in the dropdown to 50 to 100 items
  const minVisibleQuestions = 10;
  const maxVisibleQuestions = 100;
  const limitedQuestions = filteredQuestions.slice(0, maxVisibleQuestions);

  return (
    <>
      <div className="container mx-auto p-14 w-[w-1440px] h-[500px] bg-mustard">
        <div className="items-center mt-24">
          <div className="text-3xl font-bold mt-6 text-center">
            How Can We Help You?
          </div>
          <div className="flex flex-col items-center mt-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 pr-3 pointer-events-none">
                <AiOutlineSearch className="w-6 h-6 text-gray-300" />
              </div>
              <input
                type="text"
                placeholder="Type your question Here..."
                value={searchTerm}
                onChange={handleInputChange}
                className="w-[591px] h-[48px] px-10 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {searchTerm !== "" && (
              <div className="mt-2 w-[591px] h-[256px] overflow-y-auto bg-white rounded-md shadow-md">
                {limitedQuestions.length > 0 ? (
                  limitedQuestions.map((question, index) => (
                    <div
                      key={index}
                      className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                    >
                      {question}
                    </div>
                  ))
                ) : (
                  <div className="py-2 px-4 text-gray-500">
                    No result found.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default SearchBar;
