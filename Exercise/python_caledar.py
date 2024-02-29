import calendar

def get_month_name(month_number: int):
    month_names = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    }
    return month_names.get(month_number, "Invalid month number")

year = int(input("Enter the year: "))
print(f"Here is the calendar of {year}")
cal = calendar.calendar(year)
print(cal)

month = int(input("Enter the month: "))
print(f"Here is the caledar of {get_month_name(month)} - {year} ")

month_cal = calendar.month(year, month)
print(month_cal)