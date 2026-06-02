import { Container, ScheduleBottom, ScheduleTop, ScheduleTopAvatar, ScheduleTopDescription, ScheduleTopLabel, ScheduleTopTitle, ScheduleTopIcon, ScheduleBottomContainer, ScheduleBottomIcon, ScheduleBottomTitle, ScheduleTopContent } from "./style.js"

export const ScheduleCard = () => {
    return (
        <Container>
            <ScheduleTop>
                <ScheduleTopContent>
                    <ScheduleTopAvatar source={require("../../assets/doctor.png")} />
                    <ScheduleTopTitle>
                        <ScheduleTopLabel>Dr. Imran Syahir</ScheduleTopLabel>
                        <ScheduleTopDescription>General Doctor</ScheduleTopDescription>
                    </ScheduleTopTitle>
                </ScheduleTopContent>
                <ScheduleTopIcon source={require("../../assets/arrow-right.png")} />
            </ScheduleTop>
            <ScheduleBottom>
                <ScheduleBottomContainer>
                    <ScheduleBottomIcon source={require("../../assets/calendar.png")} />
                    <ScheduleBottomTitle>Sunday, 12 June</ScheduleBottomTitle>
                </ScheduleBottomContainer>
                <ScheduleBottomContainer>
                    <ScheduleBottomIcon source={require("../../assets/clock.png")}/>
                    <ScheduleBottomTitle>11:00 - 12:00 AM</ScheduleBottomTitle>
                </ScheduleBottomContainer>
            </ScheduleBottom>
        </Container>
    )
}