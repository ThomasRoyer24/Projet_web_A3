<?php
exec("python ../python/export_hl.py MLP [[45,2,8,3,8,8]]", $output, $rep);
print_r($output);
print_r($rep);
?>