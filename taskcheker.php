<?php
   
    error_reporting(0);
    $tasks = array ("2023-02-27" => 'Check mail.',"2024-02-28" => 'Finish lab 4');
   
    $outputarr = array ();
   
   
    while ($ele = each ($tasks)){
        if ($ele['key'] == $_GET['thedate']){
            $outputarr[] = $ele['value'];
        }
    }
   
    if (count ($outputarr) > 0){
        ?>
        <div class="taskchecker">
            <div class="tcpadding">
                <?php
                    for ($i = 0; $i < count ($outputarr); $i++){
                        echo $outputarr[$i] . "<br />";
                    }
                ?>
            </div>
        </div>
        <?php
    }
?>
