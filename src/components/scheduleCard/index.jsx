import { Container, ScheduleBottom, ScheduleTop, ScheduleTopAvatar, ScheduleTopDescription, ScheduleTopLabel, ScheduleTopTitle, ScheduleTopIcon } from "./style.js"

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

            </ScheduleBottom>
        </Container>
    )
}