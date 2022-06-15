import React, { useState, KeyboardEvent } from 'react';
import { ISearchProps } from './Search.props';
import cn from 'classnames';
import styles from './Search.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import SearchSvg from '../SearchSvg/SearchSvg';
import { useRouter } from 'next/router';

const Search: React.FC<ISearchProps> = ({ className, ...props }) => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            goToSearch();
        }
    };

    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input
                className={styles.input}
                placeholder='Search...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button
                appearance='primary'
                className={styles.button}
                onClick={goToSearch}
            >
                <SearchSvg />
            </Button>
        </div>
    );
};

export default Search;