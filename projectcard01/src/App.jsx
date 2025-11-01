import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      brandLogo:
        "https://imgs.search.brave.com/dLezeUH1zV5TBR-x6VgsFYbbxKxTtdY8_tNyVUYxl14/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmVjdG9yLXByZW1p/dW0vaWNvbm8tbG9n/by1nb29nbGUtZGVm/aW5lLWljb25vLWdv/b2dsZS1idXNjYW5k/by1pY29ub3MtdmVj/dG9yaWFsZXNfOTgx/NTM2LTQ1NC5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQwJnE9/ODA",
      company: "Google",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/pw-iFxvWWPNXLVEcHxz-QiyqdZatr91Zby9NXatuKQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1sb2dv/LW1lYW5pbmctNTAw/eDI1MC5qcGc",
      company: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/PfueSnisSGCySABR154aXzkMmUU0_b5sM4c3X64ZFOM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC83Lzcv/MS80Mjk4My0xOTIw/eDEyMDAtZGVza3Rv/cC1oZC1hcHBsZS1s/b2dvLXdhbGxwYXBl/ci5qcGc",
      company: "Apple",
      datePosted: "10 days ago",
      post: "UI/UX Designer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/sEVAqcZOgcVNA49r860w7_t35uDx0l9vcWK6KghGnV4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
      company: "Meta",
      datePosted: "3 weeks ago",
      post: "React Native Developer",
      tag1: "Part-time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
      company: "Netflix",
      datePosted: "6 days ago",
      post: "DevOps Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Los Angeles, USA",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/BTkju2Opf17i7A7IjNaxZV8lx6lsLbycvNH5JW7wrr0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L21pY3Jvc29mdC13/aW5kb3ctbG9nby1l/bWJsZW0tMC5wbmc",
      company: "Microsoft",
      datePosted: "1 week ago",
      post: "Cloud Architect",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$100/hr",
      location: "Seattle, USA",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/JBZ3acPiMPx8u2kYN8HVt1KlVskDBh8GLw37-6eVJCU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UxLzJh/LzY3L2UxMmE2NzIx/ZDUyZTA3OWM1ZTMz/NjMyZjY2ZGRiOGE5/LmpwZw",
      company: "Tesla",
      datePosted: "4 days ago",
      post: "Data Analyst",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Austin, USA",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/WiuQFHYOB-MoNrTB-KEZQPzQ_O2Nd9ZaK5J9nFtzLs4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMxLzIvc3BvdGlm/eS1sb2dvLXBuZ19z/ZWVrbG9nby0zMTU5/MjkucG5n",
      company: "Spotify",
      datePosted: "8 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Stockholm, Sweden",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/i-44FCn8oZN4Hh8CJxfVT6T8jBEHfhwXlk7Ek1t6zmU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d3NraS5jb20vYmxv/Zy9hZG9iZS1sb2dv/LTIwMTctYmxhY2tf/MTczOTU0Mjc4NTUx/Ny53ZWJwhttps://logo.clearbit.com/adobe.com",
      company: "Adobe",
      datePosted: "12 days ago",
      post: "Product Designer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "San Jose, USA",
    },
    {
      brandLogo:
        "https://imgs.search.brave.com/PiTh69Wej1DNRqH4ycDUSwbheNZdHIWsDL6nvyUO6Vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGF0Y2h3aXNlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wMS9pbWFnZS0x/Mi5wbmc",
      company: "IBM",
      datePosted: "3 weeks ago",
      post: "Java Developer",
      tag1: "Contract",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Pune, India",
    },
  ];

  return (
    <div className="parent">
      {jobs.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.company}
              location={elem.location}
              datePosted={elem.datePosted}
              post={elem.post}
              pay={elem.pay}
              tag1={elem.tag1}
              tag2={elem.tag2}
              img={elem.brandLogo}
            />
          </div>
        );
      })}
    </div>
  );
};
export default App;
