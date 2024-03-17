import { Container, Box, Text, Grid, Button, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { arrayOfMonth, daysOfWeek } from "../constants/rootPage";
import {
  dayOfArray,
  getMonthStartingDay,
  getNoOfDaysInMonths,
  tenYears,
} from "../utils";

function Calendar() {
  const defaultInitializeVariables = new Date();
  const defaultMonth = defaultInitializeVariables.getMonth();
  const defaultYear = defaultInitializeVariables.getFullYear();
  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);
  const [selectedYear, setSelectedYear] = useState(defaultYear);
  const [monthClicked, setMonthClicked] = useState(false);
  const [yearClicked, setYearClicked] = useState(false);
  let dateOfTheInitializeVariables = new Date(selectedYear, selectedMonth);
  let presentDayDate = dateOfTheInitializeVariables.getDate();
  // +1 is used to make the day start with 1 instead of 0
  let presentWeekDay = dateOfTheInitializeVariables.getDay() + 1;
  let presentMonth = dateOfTheInitializeVariables.getMonth();
  let presentYear = dateOfTheInitializeVariables.getFullYear();
  let previousMonth = 0;
  let previousYear = 0;
  let tenYear = tenYears(presentYear);

  let [getMonthRecentlySelected, setMonthRecentlySelected] = useState(
    arrayOfMonth[presentMonth]
  );
  let [getNoOfDaysInMonth, setNoOfDaysInMonth] = useState(
    getNoOfDaysInMonths(presentMonth, presentYear)
  );
  let [getStartingDayOfMonth, setStartingDayOfMonth] = useState(
    getMonthStartingDay(presentMonth, presentYear)
  );
  let indexOfStartingDayOfMonth = daysOfWeek.indexOf(getStartingDayOfMonth);
  switch (presentMonth) {
    case 0:
      previousMonth = 11;
      previousYear = presentYear - 1;
      break;
    default:
      previousMonth = presentMonth - 1;
      previousYear = presentYear;
      break;
  }
  const [getSelectedDate, dateSelected] = useState();
  let monthDaysArray = dayOfArray(getNoOfDaysInMonth);
  const [getNoOfDaysInPreviousMonth, setNoOfDaysInPreviousMonth] = useState(
    getNoOfDaysInMonths(previousMonth, previousYear)
  );
  let previousMonthDayArray = dayOfArray(getNoOfDaysInPreviousMonth);
  let datesToAddPriorToPresentMonth = previousMonthDayArray.slice(
    getNoOfDaysInPreviousMonth - indexOfStartingDayOfMonth
  );
  let p = [1, 2, 3, 4];

  const handleChangingOfMonthYear = () => {
    dateOfTheInitializeVariables = new Date(selectedYear, selectedMonth);
    setMonthRecentlySelected(arrayOfMonth[selectedMonth]);

    presentDayDate = dateOfTheInitializeVariables.getDate();
    // +1 is used to make the day start with 1 instead of 0
    presentWeekDay = dateOfTheInitializeVariables.getDay() + 1;
    presentMonth = dateOfTheInitializeVariables.getMonth();
    presentYear = dateOfTheInitializeVariables.getFullYear();
    setMonthRecentlySelected(arrayOfMonth[presentMonth]);
    setNoOfDaysInMonth(getNoOfDaysInMonths(presentMonth, presentYear));
    setStartingDayOfMonth(getMonthStartingDay(presentMonth, presentYear));
    indexOfStartingDayOfMonth = daysOfWeek.indexOf(getStartingDayOfMonth);
    switch (presentMonth) {
      case 0:
        previousMonth = 11;
        previousYear = presentYear - 1;
        break;
      default:
        previousMonth = presentMonth - 1;
        previousYear = presentYear;
    }
    setNoOfDaysInPreviousMonth(
      getNoOfDaysInMonths(previousMonth, previousYear)
    );
    previousMonthDayArray = dayOfArray(getNoOfDaysInPreviousMonth);
    datesToAddPriorToPresentMonth = previousMonthDayArray.slice(
      getNoOfDaysInPreviousMonth - indexOfStartingDayOfMonth
    );
  };

  const handleApplyOfCalender = () => {
    const arrayOfCalenderDetails = [
      getSelectedDate,
      arrayOfMonth[selectedMonth],
      selectedYear,
    ];
    return arrayOfCalenderDetails;
  };

  useEffect(() => {
    handleChangingOfMonthYear();
  }, [selectedMonth, selectedYear]);

  return (
    <Container bg={"#000000"} zIndex={1} width={"300px"} height={"300px"}>
      {yearClicked && !monthClicked ? (
        <Box boxSize={"fit-content"}>
          <Grid
            templateColumns="repeat(5, 1fr)"
            templateRows="repeat(2, 1fr)"
            gap={4}
          >
            {tenYear.map((value, index) => (
              <Text
                key={index}
                bg={"black"}
                color={"white"}
                cursor={"pointer"}
                onClick={() => {
                  setSelectedYear(value), setYearClicked(false);
                }}
              >
                {value}
              </Text>
            ))}
          </Grid>
          <Box mt={4} display="flex" justifyContent="flex-end">
            <Button
              variant="outline"
              mr={2}
              onClick={() => setYearClicked(false)}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      ) : !yearClicked && monthClicked ? (
        <Box boxSize={"fit-content"}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            templateRows="repeat(4, 1fr)"
            gap={4}
          >
            {arrayOfMonth.map((value, index) => (
              <Text
                key={index}
                bg={"black"}
                color={"white"}
                cursor={"pointer"}
                onClick={() => {
                  setSelectedMonth(arrayOfMonth.indexOf(value)),
                    setMonthClicked(false);
                }}
              >
                {value}
              </Text>
            ))}
          </Grid>
          <Box mt={4} display="flex" justifyContent="flex-end">
            <Button
              variant="outline"
              mr={2}
              onClick={() => setMonthClicked(false)}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      ) : (
        <Box blockSize={"fit-content"}>
          <Box display={"flex"}>
            <Text
              fontSize="lg"
              fontWeight="bold"
              cursor={"pointer"}
              onClick={() => setMonthClicked(true)}
            >
              {getMonthRecentlySelected}
            </Text>
            <Text
              ml={4}
              fontSize="lg"
              fontWeight="bold"
              cursor={"pointer"}
              onClick={() => setYearClicked(true)}
            >
              {presentYear}
            </Text>
          </Box>
          <Grid templateColumns="repeat(7, 1fr)" templateRows="repeat(4, 1fr)">
            {/* Days of the week */}
            {daysOfWeek.map((value, index) => (
              <Text key={index}>{value}</Text>
            ))}
            {datesToAddPriorToPresentMonth.map((value, index) => (
              <Text key={index} color={"gray"} bg={"black"} cursor={"no-drop"}>
                {value}
              </Text>
            ))}
            {/* Calendar dates */}
            {monthDaysArray.map((value, index) => (
              <Text
                key={index}
                color={"white"}
                bg={getSelectedDate == value ? "blue" : "black"}
                cursor={"pointer"}
                border-radius={50}
                textAlign={"center"}
                onClick={() => {dateSelected(value)}}
              >
                {value}
              </Text>
            ))}
            {/* ... */}
          </Grid>
          <Box mt={4} display="flex" justifyContent="flex-end">
            <Button variant="outline" mr={2}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => handleApplyOfCalender()}>
              Apply
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
}

export default Calendar;
