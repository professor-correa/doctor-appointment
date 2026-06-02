import { Container, ScheduleBottom, ScheduleTop, ScheduleTopAvatar, ScheduleTopDescription, ScheduleTopLabel, ScheduleTopTitle, ScheduleTopIcon, ScheduleBottomContainer, ScheduleBottomIcon, ScheduleBottomTitle } from "./style.js"

export const ScheduleCard = () => {
    return (
        <Container>
            <ScheduleTop>
                <ScheduleTopAvatar />
                <ScheduleTopTitle>
                    <ScheduleTopLabel>Dr. Imran Syahir</ScheduleTopLabel>
                    <ScheduleTopDescription>General Doctor</ScheduleTopDescription>
                </ScheduleTopTitle>
                <ScheduleTopIcon />
            </ScheduleTop>
            <ScheduleBottom>
                <ScheduleBottomContainer>
                    <ScheduleBottomIcon />
                    <ScheduleBottomTitle>Sunday, 12 June</ScheduleBottomTitle>
                </ScheduleBottomContainer>
                <ScheduleBottomContainer>
                    <ScheduleBottomIcon />
                    <ScheduleBottomTitle>11:00 - 12:00 AM</ScheduleBottomTitle>
                </ScheduleBottomContainer>
            </ScheduleBottom>
        </Container>
    )
}