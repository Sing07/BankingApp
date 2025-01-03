import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

export default function Home() {
    const loggedIn = { firstName: "Sing", lastName: "JSM", email: "woef@eowf.com", };

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || "Guest"}
                        subtext="Access and manage you account and transactions efficiently"
                    />
                    <TotalBalanceBox accounts ={[]} totalBanks = {1} totalCurrentBalance ={1250.00}/>
                </header>
            </div>
            <RightSidebar user = {loggedIn} transactions = {[]} banks= {[{currentBalance: 123.50}, {currentBalance:234.53}]} />
        </section> 
    );
}
