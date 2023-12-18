import "./index.css";

const MatchCard = (props) => {
  const { matchDetails } = props;
  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = matchDetails;
  const textColor = matchStatus === "Won" ? "won" : "lost";
  return (
    <li className="MatchCard">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="matchCard-logo"
      />
      <p>{competingTeam}</p>
      <br />
      <p>{result}</p>
      <br />
      <p className={textColor}>{matchStatus}</p>
    </li>
  );
};

export default MatchCard;
