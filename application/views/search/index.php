<?php include(VIEWPATH.'common/checkSession.php'); ?>
<?php include(VIEWPATH.'common/header.php'); ?>

    <body>
        <table width="100%">
                
                <tr>
                    <td width="30%">Cashier Name : <?=$_SESSION['cashier_name']?><br><a className="submitbutton" href="<?=SERVER_BASE_URL_FULL?>index/logout">Logout</a></td>
                    <td width="30%"><b><?=$business_name?></b></td>
                    <td width="40%"><img src="<?=IMG_UPLOAD?><?=$logo?>"></td>
                </tr>

        </table>
        <div id="page" data-page="search" data-players='<?=json_encode($players,JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP |JSON_HEX_APOS|JSON_HEX_QUOT)?>'></div>
        
        <?php include(VIEWPATH.'common/footer.php'); ?>

        


