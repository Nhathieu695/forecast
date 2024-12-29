import React from "react";
import { useEffect, useState}  from "react";
import { useNavigate } from 'react-router-dom';

export interface SearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }


const [searchQuery, SetsearchQuery] = useState('')
const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ className, ...props }, ref) => {

    useEffect(() => {
      if(query) {
        SetsearchQuery(query)
      }
    })

    let navigate = useNavigate ();
    const handleClick = () => {
       navigate('/research', {state: {query: userQuery}});
    }    
    return (
      <div className="relative flex items-center">
        <input
          type="text"
          ref={ref}
          className={`block w-full rounded-md border border-input bg-background px-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring ${className}`}
          placeholder="Search..."
          {...props}
        />

      </div>
    );
  }
);
Search.displayName = "Search";

export { Search };
