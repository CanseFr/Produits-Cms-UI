import AdminNavBar from "../../../base/admin-navbar/AdminNavBar";
import Typography from "@mui/material/Typography";
import {Card, CardActions, CardContent, Grid} from "@mui/material";
import Button from "@mui/material/Button";
import {BarChart, LineChart, PieChart, ScatterChart} from "@mui/x-charts";


const data = [
    {
        id: 'data-0',
        x1: 329.39,
        x2: 391.29,
        y1: 443.28,
        y2: 153.9,
    },
    {
        id: 'data-1',
        x1: 96.94,
        x2: 139.6,
        y1: 110.5,
        y2: 217.8,
    },
    {
        id: 'data-2',
        x1: 336.35,
        x2: 282.34,
        y1: 175.23,
        y2: 286.32,
    },
    {
        id: 'data-3',
        x1: 159.44,
        x2: 384.85,
        y1: 195.97,
        y2: 325.12,
    },
    {
        id: 'data-4',
        x1: 188.86,
        x2: 182.27,
        y1: 351.77,
        y2: 144.58,
    },
    {
        id: 'data-5',
        x1: 143.86,
        x2: 360.22,
        y1: 43.253,
        y2: 146.51,
    },
    {
        id: 'data-6',
        x1: 202.02,
        x2: 209.5,
        y1: 376.34,
        y2: 309.69,
    },
    {
        id: 'data-7',
        x1: 384.41,
        x2: 258.93,
        y1: 31.514,
        y2: 236.38,
    },
    {
        id: 'data-8',
        x1: 256.76,
        x2: 70.571,
        y1: 231.31,
        y2: 440.72,
    },
    {
        id: 'data-9',
        x1: 143.79,
        x2: 419.02,
        y1: 108.04,
        y2: 20.29,
    },
    {
        id: 'data-10',
        x1: 103.48,
        x2: 15.886,
        y1: 321.77,
        y2: 484.17,
    },
    {
        id: 'data-11',
        x1: 272.39,
        x2: 189.03,
        y1: 120.18,
        y2: 54.962,
    },
    {
        id: 'data-12',
        x1: 23.57,
        x2: 456.4,
        y1: 366.2,
        y2: 418.5,
    },
    {
        id: 'data-13',
        x1: 219.73,
        x2: 235.96,
        y1: 451.45,
        y2: 181.32,
    },
    {
        id: 'data-14',
        x1: 54.99,
        x2: 434.5,
        y1: 294.8,
        y2: 440.9,
    },
    {
        id: 'data-15',
        x1: 134.13,
        x2: 383.8,
        y1: 121.83,
        y2: 273.52,
    },
    {
        id: 'data-16',
        x1: 12.7,
        x2: 270.8,
        y1: 287.7,
        y2: 346.7,
    },
    {
        id: 'data-17',
        x1: 176.51,
        x2: 119.17,
        y1: 134.06,
        y2: 74.528,
    },
    {
        id: 'data-18',
        x1: 65.05,
        x2: 78.93,
        y1: 104.5,
        y2: 150.9,
    },
    {
        id: 'data-19',
        x1: 162.25,
        x2: 63.707,
        y1: 413.07,
        y2: 26.483,
    },
    {
        id: 'data-20',
        x1: 68.88,
        x2: 150.8,
        y1: 74.68,
        y2: 333.2,
    },
    {
        id: 'data-21',
        x1: 95.29,
        x2: 329.1,
        y1: 360.6,
        y2: 422.0,
    },
    {
        id: 'data-22',
        x1: 390.62,
        x2: 10.01,
        y1: 330.72,
        y2: 488.06,
    },
];

export default function AdminHome() {
    return (<>
        <AdminNavBar/>
        <Typography textAlign={"center"} variant={"h3"}>Dashboard</Typography>

        <Grid container sx={{height: 800, width: '80%', margin: "auto"}} spacing={2}>
            <Grid item xs={6}>
                <Card sx={{width: 600, height: 400}}>
                    <CardContent>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            Vente de la semaine
                        </Typography>
                    </CardContent>
                    <BarChart
                        xAxis={[{scaleType: 'band', data: ['group A', 'group B', 'group C']}]}
                        series={[{data: [4, 3, 5]}, {data: [1, 6, 3]}, {data: [2, 5, 6]}]}
                        width={500}
                        height={300}
                    />
                    <CardActions>
                        <Button size="small">Consulter le reste des ventes</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card sx={{width: 600, height: 400}}>
                    <CardContent>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            Stock
                        </Typography>

                    </CardContent>
                    <PieChart
                        series={[
                            {
                                data: [
                                    {id: 0, value: 10, label: 'series A'},
                                    {id: 1, value: 15, label: 'series B'},
                                    {id: 2, value: 20, label: 'series C'},
                                ],
                            },
                        ]}
                        width={400}
                        height={200}
                    />
                    <CardActions>
                        <Button size="small">Constulter le reste des stock</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card sx={{width: 600, height: 400}}>
                    <CardContent>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            Trafique Client
                        </Typography>
                        <LineChart
                            xAxis={[{data: [1, 2, 3, 5, 8, 10]}]}
                            series={[
                                {
                                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                                },
                            ]}
                            width={500}
                            height={300}
                        />
                    </CardContent>
                    <CardActions>
                        <Button size="small">Consulter le reste des trafique</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card sx={{width: 600, height: 400}}>
                    <CardContent>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            Machin
                        </Typography>

                    </CardContent>
                    <ScatterChart
                        width={600}
                        height={300}
                        series={[
                            {
                                label: 'Series A',
                                data: data.map((v) => ({x: v.x1, y: v.y1, id: v.id})),
                            },
                            {
                                label: 'Series B',
                                data: data.map((v) => ({x: v.x1, y: v.y2, id: v.id})),
                            },
                        ]}
                    />
                    <CardActions>
                        <Button size="small">Consulter le reste des machin</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>


    </>)
}