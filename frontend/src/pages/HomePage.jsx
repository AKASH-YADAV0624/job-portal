import React from 'react';
import SearchBar from '@/components/searchbar/SearchBar';
import PopularCategory from '@/components/popularcategory/PopularCategory';
import RecentJobs from '@/components/Recentjobs/RecentJobs';
import Footer from '@/components/Footer';
import Header from '@/components/shared/Header'
import useGetAllJobs from '@/hooks/useGetAllJobs';
import ExtraContainer from '@/components/ExtraContainer';

const HomePage = () => {
  useGetAllJobs();
  return (
    <div>
        <Header/>
        <SearchBar />
        <PopularCategory/>
        <RecentJobs/>
        <ExtraContainer/>
        <Footer/>

    </div>
  );
};

export default HomePage;
