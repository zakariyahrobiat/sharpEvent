import { useContext, createContext, useState, useEffect } from "react";
import { PropsWithChildren } from "react";
import { Data } from "../assets/data";
interface inputFields {
  minPrice: number;
  maxPrice: number;
  event: string;
  location: string;
  price: string;
  rate: string;
}
interface dataProps {
  id: number;
  name: string;
  direction: string;
  facilities: string;
  price: string;
  rating: string;
  reviews: string;
  rate: string;
  image: string;
}
interface AuthContextType {
  data: dataProps[];
  block: boolean;
  handleBlock: () => void;
  handleFlex: () => void;
  handlePageChange: (page: number) => void;
  currentItems: dataProps[];
  totalPages: number;
  currentPage: number;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  input: inputFields;
}
export const AuthContext = createContext<AuthContextType>({
  data: [],
  block: false,
  handleBlock: () => {},
  handleFlex: () => {},
  handlePageChange: () => {},
  currentItems: [],
  totalPages: 0,
  currentPage: 1,
  handleInput: () => {},
  input: {
    minPrice: 0,
    maxPrice: 40000,
    event: "",
    location: "",
    price: "",
    rate: "",
  },
});

export const Context = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<dataProps[]>([]);
  const [block, setBlock] = useState<boolean>(false);
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const [input, setInput] = useState<inputFields>({
    minPrice: 0,
    maxPrice: 40000,
    event: "",
    location: "",
    price: "",
    rate: "",
  });
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);
  const handleBlock = () => {
    setBlock(true);
  };

  const handleFlex = () => {
    setBlock(false);
  };
  useEffect(() => {
    setData(Data);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        data,
        block,
        handleBlock,
        handleFlex,
        handlePageChange,
        currentItems,
        totalPages,
        currentPage,
        input,
        handleInput,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
