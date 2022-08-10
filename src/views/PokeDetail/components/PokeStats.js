const PokeStats = ({stats}) => {
    console.log(stats);
    return(
        <>
            {stats?.map(({stat, base_stat}, index)=>{
                return(
                    <div key={index} style={{display:"flex"}}>
                        <p>{stat.name}</p>
                        <p>: {base_stat}%</p>
                    </div>
                );
            })}
        </>
    );
}

export default PokeStats;