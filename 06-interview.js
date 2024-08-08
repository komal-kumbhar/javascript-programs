var interviewEligibility = function (gradScore, hscScore, sscScore, candidateName) {
    if (gradScore>=70 || hscScore>=80 || sscScore>90) {
        console.log(`congrats ${candidateName} you are eligible for TCS interview.`);
        
    } else {
        console.log(`${candidateName} unfortunately you are not eligible for interview.`);
        
    }
}
interviewEligibility(80, 86, 90, "Jenny");
interviewEligibility(70, 65, 55, "jassy");
interviewEligibility(60, 79, 88, "Kriti");