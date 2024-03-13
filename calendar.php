<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendar</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            
        }

        table {
            width: 100%;
            border-collapse: collapse;
            border: 2px solid #444;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            background-color: #fff;
        }

        th, td {
            text-align: center;
            padding: 10px;
            border: 1px solid #ccc;
        }

        th {
            background-color: #FFBC37;
            color: #fff;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        td {
            background-color: #f9f9f9;
        }

        .highlight {
            background-color: #FFCE6E;
        }

        .current-day {
            background-color: #FFBC37;
            color: #fff;
            font-weight: bold;
        }

        .today {
            background-color: #A2BAFA;
        }
    </style>
</head>
<body>
<?php

if(!isset($_GET['month']) && isset($_GET['year'])) {
    $month = date("n");
    $year = date("Y");
} else {
    $month = date("n");
    $year = date("Y");
}
$timestamp = mktime(0, 0, 0, $month, 1, $year);
$monthname = date("F", $timestamp);
?>

<table style="width: 105px; border-collapse: collapse;" border="1" cellpadding="3" cellspacing="0" bordercolor="#000000">
    <tr style="background: #FFBC37;">
        <td colspan="7" style="text-align: center;" onmouseover="this.style.background='#FFCE6E'" onmouseout="this.style.background='#FFBC37'">
            <span style="font-weight: bold;"><?php echo $monthname." ".$year; ?></span>
        </td>
    </tr>
    <tr style="background: #FFBC37;">
        <td style="text-align: center; width: 15px;"><span style="font-weight: bold;">Su</span></td>
        <td style="text-align: center; width: 15px;"><span style="font-weight: bold;">M</span></td>
        <td style="text-align: center; width: 15px;"><span style="font-weight: bold;">Tu</span></td>
        <td style="text-align: center; width: 15px;"><span style="font-weight: bold;">W</span></td>
        <td style="text-align: center; width: 15px;"><span style="font-weight: bold;">Th</span></td>
        <td style="text-align: center; width: 15px;"><span style="font-weight: bold;">F</span></td>
        <td style="text-align: center; width: 15px;"><span style="font-weight: bold;">Sa</span></td>
    </tr>

<?php
$monthstart = date("w", $timestamp);
$lastday = date("d", mktime(0, 0, 0, $month + 1, 0, $year)); 
$startdate = 1 - $monthstart;
$numrows = ceil(($lastday + $monthstart) / 7);
for ($k = 1; $k <= $numrows; $k++) {
    echo '<tr>';
    for ($i = 0; $i < 7; $i++) {
        $startdate++;
        if (($startdate <= 0) || ($startdate > $lastday)) {
            echo '<td style="background: #FFFFFF;">&nbsp;</td>';
        } else {
            if ($startdate == date("j") && $month == date("n") && $year == date("Y")) {
?>
                <td style="text-align: center; background: #FFBC37;" onmouseover="this.style.background='#FFCE6E'" onmouseout="this.style.background='#FFBC37'"><?php echo date("j"); ?></td>
<?php
            } else {
?>
                <td style="text-align: center; background: #A2BAFA;" onmouseover="this.style.background='#CAD7F9'" onmouseout="this.style.background='#A2BAFA'"><?php echo $startdate; ?></td>
<?php
            }
        }
    }
    echo '</tr>';
}
?>
</table>
