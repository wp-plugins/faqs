<?php

$wp_list_table = new faqs\FAQsListTable();

?>
<div class="wrap">
    <h2>
    All FAQs    
    <a href="<?php print admin_url('admin.php?page=faqs-create-faqs'); ?>" class="button-primary">Create FAQs</a>    
    </h2>

   
<?php
$wp_list_table->display();
?>

</div>